import "../styles/acessoNegado.css";

export default function AcessoNegado() {
    return (
        <main className="acesso-pagina">
            <section className="acesso-esquerda">
                <div className="acesso-mensagem">
                    <h1>Acesso negado</h1>

                    <p>
                        Sua conta não tem permissão para visualizar este conteúdo.
                        <br />
                        Fale com o administrador ou entre com outra conta.
                    </p>
                </div>
            </section>

            <section className="acesso-direita">
                <div className="acesso-cartao">
                    <div className="acesso-logo">
                        <img src="./logo-n.png" alt="Logo Neocore" />

                        <h2>NEOCORE</h2>
                        <span>A EMPRESA MAIS TOP DO MUNDO</span>
                    </div>

                    <div className="acesso-conteudo">
                        <h3>Acesso negado</h3>

                        <p className="acesso-descricao">
                            Você não tem permissão para acessar esta página.
                        </p>

                        <div className="acesso-erro">
                            <img src="./lock.svg" alt="" />

                            <div>
                                <span>ERRO</span>
                                <p>Permissão insuficiente</p>
                            </div>
                        </div>

                        <div className="acesso-botoes">
                            <button className="acesso-voltar" type="button">
                                Voltar
                            </button>

                            <button className="acesso-trocar" type="button">
                                Trocar de conta
                            </button>
                        </div>

                        <p className="acesso-ajuda">
                            Precisa de acesso?{" "}
                            <a href="#" onClick={(evento) => evento.preventDefault()}>
                                Solicitar acesso
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}