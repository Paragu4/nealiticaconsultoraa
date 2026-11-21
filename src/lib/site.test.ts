import { describe, expect, it } from "vitest";
import { buildContactMessage, whatsappUrl } from "./site";

describe("contacto por WhatsApp", () => {
  it("arma el link de WhatsApp solo con los dígitos del número", () => {
    expect(whatsappUrl(undefined, "+54 376 412-3456")).toBe("https://wa.me/543764123456");
  });

  it("incluye el mensaje del formulario codificado en el link", () => {
    const msg = buildContactMessage({
      nombre: "Ana",
      organizacion: "Municipio de Oberá",
      servicio: "Formación de equipos",
      mensaje: "Queremos una capacitación.",
    });
    expect(msg).toBe(
      "Hola Nealítica, soy Ana.\nOrganización: Municipio de Oberá\nMe interesa: Formación de equipos\n\nQueremos una capacitación.",
    );
    expect(whatsappUrl(msg, "5491100000000")).toBe(
      `https://wa.me/5491100000000?text=${encodeURIComponent(msg)}`,
    );
  });
});
