import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://github.com/kafs87" target="redirect">
                        <img src="/imagens/github.png" alt="Github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kauan-ferreira-b860a22a7/" target="redirect">
                        <img src="/imagens/linkedin.png" alt="Linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/kafs_87/" target="redirect">
                        <img src="/imagens/ig.png" alt="Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/react.png" alt="Logo do react" />
        </section>
        <section>
            <p>
                Desenvolvido por Kauan - ALURA
            </p>
        </section>
    </footer>)
}

export default Rodape