/**
 * Serviço de cadastro.
 * TODO: ajustar a URL e o formato da resposta conforme o seu backend.
 */
const API_URL = import.meta.env?.VITE_API_URL ?? '';

export async function cadastrarUsuario(payload) {
  try {
    const res = await fetch(`${API_URL}/api/cadastro`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return { success: false, message: data.message };
    }

    return { success: true };
  } catch {
    return { success: false, message: 'Falha de conexão. Tente novamente.' };
  }
}