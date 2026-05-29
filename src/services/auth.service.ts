import { supabase }
  from "../config/supabase/client";

export async function loginService(
  email: string,
  password: string
) {

  console.log(
    "☁️ Chamando Supabase..."
  );

  const { data, error } =
    await supabase.auth
      .signInWithPassword({
        email,
        password,
      });

  console.log(
    "📬 Resposta recebida do Supabase"
  );

  if (error) {

    console.log(
      "❌ Supabase retornou erro:",
      error.message
    );

    throw new Error(
      "Email ou senha inválidos"
    );
  }

  console.log(
    "✅ Supabase autenticou usuário"
  );

  return {

    token:
      data.session?.access_token,

    user: {
      id: data.user?.id,
      email: data.user?.email,
    },

    session: {
      expiresAt:
        data.session?.expires_at,
    },
  }
}

export async function
  forgotPasswordService(
    email: string
  ) {

  console.log(
    "📨 Enviando recuperação..."
  );

  const { error } =
    await supabase.auth
      .resetPasswordForEmail(
        email,
        {
          redirectTo:
            "http://localhost:5173/reset-password",
        }
      );

  if (error) {

    console.log(
      "❌ Erro recuperação:",
      error.message
    );
    
    throw new Error(
      "Erro ao enviar recuperação, aguarde alguns minutos" 
    );
  }
  
  console.log(
    "✅ Email recuperação enviado"
  );

  return {

    message:
      "Email enviado com sucesso"
  };
  
}