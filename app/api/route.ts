import { supabase } from "../lib/supabase";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const { data: existingLead, error: findError } = await supabase
      .from("leads")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (findError) {
      throw findError;
    }
    if (existingLead) {
      return Response.json(
        {
          success: false,
          error: "E-mail cadastrado",
        },
        {
          status: 409,
        },
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const { error } = await supabase.from("leads").insert({
        email: normalizedEmail,
    });

    if (error) {
    if (error.code === "23505") {
        return Response.json(
        {
            success: false,
            error: "E-mail já cadastrado! Em breve entraremos em contato",
        },
        {
            status: 409,
        }
        );
    }

    throw error;
    }

    if (error) {
      throw error;
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Erro interno do servidor",
      },
      {
        status: 500,
      },
    );
  }
}
