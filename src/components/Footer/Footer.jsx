import "./footer.css";
import logo from '../../assets/images/Logo.png';
import {IoCallOutline, IoLogoWhatsapp, IoMailOutline, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin, IoLogoYoutube, IoLocationOutline, IoSendOutline} from 'react-icons/io5';
import {AiOutlineSend} from 'react-icons/ai';
import google from "../../assets/images/google.png";
import apple from "../../assets/images/apple.png";


export function Footer() {
    const Local = localStorage.getItem("suachave");
    const user = JSON.parse(Local);

    const date = new Date().getFullYear();
    return (
        <div className="Footer">
                <div className="sections">
                        <div className="sectionUnic">
                        <a href="/"><img src={logo} alt="" /></a>
                            <h5> <b>Encontre imóveis, imobiliárias e corretores em poucos cliques!</b> </h5>
                            <br />
                            <div className="network">
                                <a href="https://www.facebook.com/somossuachave" target="_blank" rel="noreferrer" className="networkButton"><IoLogoFacebook/></a>
                                <a href="https://www.instagram.com/somossuachave/" target="_blank" rel="noreferrer" className="networkButton"><IoLogoInstagram/></a>
                                <a href="https://www.linkedin.com/company/sua-chave/" target="_blank" rel="noreferrer" className="networkButton"><IoLogoLinkedin/></a>
                                <a href="https://www.youtube.com/@suachave" target="_blank" rel="noreferrer" className="networkButton"><IoLogoYoutube/></a>
                            </div>
                        </div>
                        <div className="sectionUnic">
                            <h3>NAVEGAÇÃO</h3>
                                <h5><a href="/sobre">Quem somos</a></h5>
                                <h5><a href="/imoveis/all">Imóveis</a></h5>
                                {/* <h5><a href="/corretores">Corretores</a></h5> */}
                                <h5><a href="/financiamento">Financiamento</a></h5>
                                <h5><a href="/avaliacao">Avaliação</a></h5>
                        </div>

                        <div className="sectionUnic">
                        <h3>ATENDIMENTO</h3>
                            <h5><IoLogoWhatsapp />(21) 99742-9585</h5>
                            <h5><IoMailOutline />contato@suachave.com.br</h5>
                            <h5><IoLocationOutline />Rua Primeira, Nº 10</h5>
                            <h5>Centro - Rio Bonito - RJ</h5>
                        </div>
                        <div className="sectionUnic">
                        <h3>Newsletter</h3>
                            <h5>Receba imóveis em seu whatsapp</h5>
                            <div className="newsletter">
                                <input type="text" placeholder="(XX)XXXXX-XXXX" />
                                <button><AiOutlineSend /></button>
                            </div>
                        </div>

                </div>
                <div className="copy">
                    <h5>© Sua Chave {date}. Todos os direitos reservados</h5>
                    <h5><a href="https://suachave.com.br/sobre">Anunciar imóvel</a></h5>
                </div>
        </div>
    )
}
