# Propostas ACT Digital

Sistema dinâmico de propostas comerciais com suporte a múltiplas empresas.

## Estrutura

- `/[empresa]` — Proposta interativa (ex: /principioativo)
- `/pdf/[empresa]` — PDF da proposta (ex: /pdf/principioativo)

## Dados

As propostas são configuradas em `propostas-data.json`. Adicionar uma nova empresa:

```json
{
  "nomeempresa": {
    "nome": "Nome da Empresa",
    "tagline": "...",
    "planos": [...],
    "decisoes": [...]
  }
}
```

Depois acessar em `https://propostas-act.vercel.app/nomeempresa`
