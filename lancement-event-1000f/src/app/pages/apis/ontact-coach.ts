import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configurer le transporteur pour l'envoi d'e-mails
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ou tout autre service email comme outlook, yahoo
      auth: {
        user: process.env.EMAIL_USER, // L'email de l'expéditeur (variable d'environnement)
        pass: process.env.EMAIL_PASS, // Le mot de passe ou token de l'expéditeur (variable d'environnement)
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER, // L'adresse email du destinataire
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `
        <h3>Vous avez un nouveau message de votre formulaire de contact</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      // Envoyer l'email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email envoyé avec succès' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email : ', error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
};

export default handler;
