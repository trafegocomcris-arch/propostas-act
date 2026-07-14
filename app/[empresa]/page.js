'use client'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import propostas from '@/propostas-data.json'
import './proposta.css'

export default function PropostaPage({ params }) {
  const { empresa } = params
  const proposta = propostas[empresa]
  const [isVisible, setIsVisible] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Array.from(document.querySelectorAll('.reveal')).indexOf(entry.target)
          setIsVisible(prev => [...new Set([...prev, idx])])
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (!proposta) {
    notFound()
  }

  const { nome, tagline, titulo, descricao, whatsapp, planos, decisoes } = proposta

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`Proposta Comercial — ${nome} | ACT Digital`}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="wrap">
          {/* HEADER */}
          <header>
            <div className="brand">
              act<span>.</span>
              <small>DIGITAL</small>
            </div>
            <div className="meta-box">
              <b>Proposta Comercial</b>
              <br />
              {nome}
            </div>
          </header>

          {/* HERO */}
          <section className={`hero reveal ${isVisible.includes(0) ? 'is-visible' : ''}`}>
            <div className="eyebrow">{tagline}</div>
            <h1>
              Evoluindo a parceria com a <em>{nome}</em>
            </h1>
            <p>{descricao}</p>
          </section>

          {/* PLANOS */}
          <section>
            <div className="section-head reveal" style={{ '--d': '0.05s' }}>
              <div className="eyebrow">TRÊS CAMINHOS</div>
              <h2>Escolha o nível de gestão ideal</h2>
              <p className="section-sub">Cada plano inclui tudo do anterior — você escolhe até onde quer que a ACT Digital chegue na sua operação.</p>
            </div>

            <div className="plans-grid">
              {planos.map((plan, idx) => (
                <div
                  key={idx}
                  className={`plan-card bracket reveal ${plan.destaque ? 'featured' : ''}`}
                  style={{ '--d': `${0.15 + idx * 0.1}s` }}
                >
                  {plan.destaque && <div className="plan-tag">MAIS ESCOLHIDO</div>}
                  <div className="plan-num">Plano {plan.numero}</div>
                  <div className="plan-name">{plan.nome}</div>
                  <div className="plan-desc">{plan.descricao}</div>
                  <div className="plan-price">
                    R$ {plan.valor.toLocaleString('pt-BR')}
                    <span>/mês</span>
                  </div>
                  <div className="plan-divider"></div>
                  <div className="plan-includes-label">O QUE ESTÁ INCLUSO</div>
                  <ul>
                    {plan.inclusos.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {plan.pré && <p className="plan-inherit">{plan.pré}</p>}
                  <a
                    href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`Olá, Christyan! Quero contratar o ${plan.nome} (R$${plan.valor.toLocaleString('pt-BR')}/mês) da proposta da ${nome}.`)}`}
                    className="plan-wa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.297-.921.967-1.129 1.165-.168.198-.336.223-.634.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.9 10.247 1.91 3.434 6.287 4.253 9.855 1.987 3.56-2.269 4.304-6.8 1.557-10.139-1.482-1.913-3.637-2.983-5.677-3.002"/>
                    </svg>
                    Quero contratar o {plan.nome}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* DECISÕES */}
          <section>
            <div className="section-head reveal">
              <div className="eyebrow">COMO DECIDIR</div>
              <h2>Qual plano faz mais sentido agora</h2>
            </div>

            <div className="guide-grid">
              {decisoes.map((dec, idx) => (
                <div
                  key={idx}
                  className={`guide-card bracket reveal`}
                  style={{ '--d': `${0.05 + idx * 0.1}s` }}
                >
                  <div className="guide-head">
                    <div className="guide-num">0{dec.numero}</div>
                  </div>
                  <b>{dec.nome}</b>
                  <div className="guide-sub">O que ele resolve</div>
                  <ul>
                    {dec.problemas.map((prob, i) => (
                      <li key={i}>{prob}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CTA FINAL */}
          <section>
            <div className="cta-box bracket reveal">
              <p className="big">
                Proposta válida por <span>7 dias</span>
              </p>
              <p className="small">Após esse período, os valores podem ser revisados conforme disponibilidade de agenda e demanda de novos clientes.</p>
              <p className="contact">Christyan Melo — CEO Act Digital</p>
              <a
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Olá, Christyan! Quero uma proposta personalizada da ACT Digital.')}`}
                className="plan-wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.297-.921.967-1.129 1.165-.168.198-.336.223-.634.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.9 10.247 1.91 3.434 6.287 4.253 9.855 1.987 3.56-2.269 4.304-6.8 1.557-10.139-1.482-1.913-3.637-2.983-5.677-3.002"/>
                </svg>
                Quero uma proposta personalizada
              </a>
            </div>
          </section>

          {/* FOOTER */}
          <footer>
            <span>ACT Digital Ltda · CNPJ 13.576.747/0001-34</span>
            <span>Proposta preparada para {nome}</span>
          </footer>
        </div>
      </body>
    </html>
  )
}
