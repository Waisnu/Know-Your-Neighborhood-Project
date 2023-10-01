package com.api.kyn.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JWTAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JWTGenerator tokenGenerator;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
        FilterChain filterChain) throws ServletException, IOException {

        // Step 1: Extract JWT from the "Authorization" header of the incoming request
        String token = getJWTFromRequest(request);

        // Step 2: Validate the JWT token
        if (StringUtils.hasText(token) && tokenGenerator.validateToken(token)) {
            
            // Step 3: Extract the username from the validated JWT
            String username = tokenGenerator.getUsernameFromJWT(token);

            // Step 4: Load user details from the database using the extracted username
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);

            // Step 5: Create an authentication token with user details and authorities (roles/permissions)
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                userDetails, null, userDetails.getAuthorities());

            // Step 6: Set additional authentication details for the token
            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

            // Step 7: Set the authentication token in the security context
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        }

        // Step 8: Continue with the request processing
        filterChain.doFilter(request, response);
    }


    // Helper method to extract JWT from the Authorization header
    private String getJWTFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
