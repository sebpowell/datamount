import { env } from "@/env.mjs";
import { convert } from "html-to-text";
import { Resend } from "resend";

export const resend = new Resend(env.RESEND_API_KEY);

type SendHTMLEmailProps = Pick<
  ISendEmailProps,
  "to" | "subject" | "bcc" | "html"
>;

type ISendEmailProps = {
  to: string;
  bcc?: string;
  subject: string;
  text?: string;
  html?: string;
};

export class EmailService {
  async sendEmail(props: ISendEmailProps) {
    const { subject, to, text, html, bcc } = props;

    try {
      await resend.emails.send({
        subject,
        from: "",
        to,
        text: text ? text : convert(html || ""),
        html,
        bcc,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async sendHtmlEmail(props: SendHTMLEmailProps) {
    const { to, subject, html } = props;

    await this.sendEmail({
      to,
      subject,
      html,
    });
  }
}

export const emailService = new EmailService();
