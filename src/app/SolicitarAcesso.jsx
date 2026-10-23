
import "../styles/solicitarAcesso.css";

export default function SolicitarAcesso({ fecharModal }) {
    return (
        <section className="solicitar-overlay">
            <div className="solicitar-modal">

                <div className="solicitar-cabecalho">
                    <button
                        className="solicitar-fechar"
                        type="button"
                        onClick={fecharModal}
                        aria-label="Fechar modal"
                    >
                        &times;
                    </button>

                    <div className="solicitar-icone">
                        <img src="./pessoa-azul.svg" alt="" />
                    </div>

                    <h2>Solicitar acesso</h2>

                    <span>
                        Preencha as informações abaixo e nossa equipe
                        irá analisar sua solicitação o mais breve possível.
                    </span>
                </div>

                <form className="solicitar-formulario">
                    <div className="solicitar-campo">
                        <label htmlFor="nome">Nome completo *</label>

                        <div className="solicitar-input">
                            <img src="./pessoa.svg" alt="" />

                            <input
                                id="nome"
                                type="text"
                                placeholder="Digite seu nome completo"
                                required
                            />
                        </div>
                    </div>

                    <div className="solicitar-campo">
                        <label htmlFor="email">E-mail corporativo *</label>

                        <div className="solicitar-input">
                            <img src="./email-fin.svg" alt="" />

                            <input
                                id="email"
                                type="email"
                                placeholder="exemplo@empresa.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="solicitar-campo">
                        <label htmlFor="motivo">
                            Motivo da solicitação *
                        </label>

                        <div className="solicitar-input solicitar-textarea">
                            <img src="./message.svg" alt="" />

                            <textarea
                                id="motivo"
                                placeholder="Informe o motivo pelo qual você precisa de acesso."
                                maxLength={500}
                                required
                            />
                        </div>

                        <span className="solicitar-ajuda">
                            Explique brevemente a necessidade de acesso.
                        </span>
                    </div>

                    <div className="solicitar-acoes">
                        <button
                            className="solicitar-btn-cancelar"
                            type="button"
                            onClick={fecharModal}
                        >
                            Cancelar
                        </button>

                        <button
                            className="solicitar-btn-enviar"
                            type="submit"
                        >
                            Enviar solicitação
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
