import { supabase } from '../lib/supabase';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        const { error } = await supabase
            .from('leads')
            .insert({
                email,
            });

            if(error) {
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
                error: error instanceof Error ? error.message : error
            },
            {
                status: 500,
            }
        );
    }
}