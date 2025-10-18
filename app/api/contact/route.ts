import { sendWhatsappMessage } from '@/lib/whats-app';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, service, message } = body;

    // Validação simples dos dados recebidos
    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, error: 'Nome, telefone e mensagem são obrigatórios.' },
        { status: 400 }
      );
    }

    // --- 1. Mensagem para a Vertical Pay (Notificação Interna) ---
    const internalPhoneNumber = process.env.VERTICAL_PHONE;
    if (!internalPhoneNumber) {
        return NextResponse.json(
            { success: false, error: 'Número para notificação interna não configurado.' },
            { status: 500 }
        );
    }
    
    const internalMessage = `
*🔔 Novo Contato Recebido! 🔔*

Um novo cliente entrou em contato através do site.

*Nome:* ${name}
*Empresa:* ${company || 'Não informado'}
*Email:* ${email || 'Não informado'}
*Telefone:* ${phone}
*Serviço de Interesse:* ${service || 'Não informado'}

*Mensagem:*
${message}
    `;

    // --- 2. Mensagem para o Cliente (Confirmação) ---
    const customerMessage = `
Olá, ${name}! 👋

Recebemos sua mensagem e agradecemos pelo seu contato.

Nossa equipe na Vertical já foi notificada e entrará em contato com você em breve.

Atenciosamente,
Equipe Vertical
    `;

    // --- Envio das mensagens ---
    // Usamos Promise.all para enviar ambas as mensagens em paralelo
    await Promise.all([
      sendWhatsappMessage(internalPhoneNumber, internalMessage.trim()),
      sendWhatsappMessage(phone, customerMessage.trim())
    ]);

    // Retorna uma resposta de sucesso para o frontend
    return NextResponse.json({
      success: true,
      message: 'Mensagens enviadas com sucesso!',
    });

  } catch (error) {
    console.error('Erro no endpoint /api/contact:', error);
    
    // Retorna uma resposta de erro genérica para o frontend
    return NextResponse.json(
      { success: false, error: 'Ocorreu um erro ao enviar as mensagens.' },
      { status: 500 }
    );
  }
}