package com.example.auth.domain.user;

public class AuthenticationDTO {

   private String emailUsuario;
   private String password;

    public AuthenticationDTO(String emailUsuario, String password) {
        this.emailUsuario = emailUsuario;
        this.password = password;
    }

    public String getEmailUsuario() {
        return emailUsuario;
    }

    public void setEmailUsuario(String emailUsuario) {
        this.emailUsuario = emailUsuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
