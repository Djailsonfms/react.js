
import whatsapp from '../components/imagem/whatsApp.jpg';
import mail from '../components/imagem/e-mail.jpg';;


const Contact = () => {
     return (
        <>
            <main className="container mt-1">
                    <div className="row mx-auto">
                    <div className="col-sm-12 col-xl-6 mt-1">
                        <button type="button" onClick={sentMail} className="btn btn-primary btn-lg btn-block">
                                <img src={mail}/> contato@recodepro.com
                        </button>
                    </div>

                    <div className="col-sm-12 col-xl-6 mt-1">
                        <button type="button" onClick={sentWpp} className="btn btn-primary btn-lg btn-block text-light">
                                <img src={whatsapp}/>
                                (11) 5555-5555
                        </button>
                    </div>

                </div>

                <div className="row justify-content-center mt-1">
                    <h2 className="text-light">Fale conosco</h2>
                    <form className="col-12" onSubmit={newMsg}>
                        <div className="form-group">
                            <label className="text-light">Nome</label>
                                <input type="text" className="form-control" id="nome" name="name" placeholder="Digite seu nome" value={name} onChange={event=>setName(event.target.value)}/>
                            
                        </div>
                        <div className="form-group">
                            <label className="text-light">Mensagem</label>  
                                <textarea className="form-control" id="msg" rows="3" name="msg" placeholder="Digite sua mensagem" value={message} onChange={event=>setMessage(event.target.value)}/>
                              
                        </div>
                        <button className="btn btn-primary col-xl-12"><img src={sent}/> Enviar</button>
                    </form>
                </div>

                { alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                                Mensagem enviada com Sucesso!
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div> }

                <div className="mt-1">
                    { msg.map(row =>{
                        return(
                            <div key={row.id_comment} className="card msg">
                                <div className="card-body">
                                    <h5 className="card-title">{row.name_msg}</h5>
                                    <p className="card-text">{row.msg}</p>
                                    <p className="card-text"><small className="text-muted">{row.date}</small></p>
                                </div>
                            </div>
                            )
                    })
                    }
                </div>
            </main>
        </>
    );
    
}

export default Contact;