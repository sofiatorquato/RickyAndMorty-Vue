export function formatarData(): string {
  const agora = new Date();

  if (window.innerWidth < 768) {
    return agora.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).replace(',', ' • ');
  } else {
    return agora.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'medium' }).replace(',', ' • ');
  }
}
