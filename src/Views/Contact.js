import React from 'react'

let InputStyled = ({active, onChangeFocus, onChange, label}) => {
	return (
		<div>
			<div style={{position:'relative', left:5, bottom:active ? -30 : 5, marginBottom:0, width:0, transitionProperty:'bottom', transitionDuration:'0.5s'}} >
				<p style={{fontWeight:active ? 'bold' : '', fontSize:active ? 18 : 16, transitionDuration:'0.5s', transitionProperty:'fontWeight; fontSize' }} >{label}</p>
			</div>
			<input onChange={(t) => onChange(t.target.value)} onFocus={() => onChangeFocus(true)} onBlur={() => onChangeFocus(false)} />
		</div>
	);
}

export default class Contact extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			name:'',
			email:'',
			text:'',
			error:false,
			wellSent:false,
			sending:false,
			focusName:false,
			focusEmail:false
		}

	}

	sendMail = () => {
		this.setState({sending:true});
		window.emailjs.send('smtp_server', 'template_9bIlFiWV', {text:this.state.text, name:this.state.name, email:this.state.email }).then(res => this.setState({wellSent:true, sending:false})).catch(e => this.setState({error:true, sending:false}));
	}

	displayWellSent = () => {
		if (this.state.wellSent){
			return (
				<div style={{display:'flex', position:'fixed', height:'100vh', width:'100vw', backgroundColor:'rgba(255,255,255,0.5)', zIndex:99999, alignItems:'center', justifyContent:'center'}} >
					<p style={{color:'#21ba45', fontWeight:'bold', fontSize:'2vw'}} >Votre message a bien été envoyé</p>
				</div>
			);
		}
		return (null);
	}

	displayError = () => {
		if (this.state.error){
			setTimeout(() => this.setState({error:false}), 2500);
			return (
				<div style={{display:'flex', position:'fixed', height:'100vh', width:'100vw', backgroundColor:'rgba(255,255,255,0.5)', zIndex:99999, alignItems:'center', justifyContent:'center'}} >
					<p style={{color:'#db2828', fontWeight:'bold', fontSize:'2vw'}} >Il y'a eu une erreur lors de l'envoie de votre message</p>
				</div>
			);
		}
		return (null);
	}

	render(){
		console.log(this.state);
		return (
			<div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', height:'80vh'}} >
				<this.displayWellSent/>
				<this.displayError/>
				<div style={{display:'flex', width:'60%', justifyContent:'space-between', marginTop:'3vh'}} >
					<InputStyled label='Nom' active={this.state.focusName === false && this.state.name === ''} onChange={(t) => this.setState({name:t})} onChangeFocus={(s) => this.setState({focusName:s})} />
					<InputStyled label='Email' active={this.state.focusEmail === false && this.state.email === ''} onChange={(t) => this.setState({email:t})} onChangeFocus={(s) => this.setState({focusEmail:s})} />
				</div>
				<div>
					<p style={{fontWeight:'bold', fontSize:18}} >Message</p>
					<textArea style={{width:'60vw', height:'30vh'}} onChange={(t) => this.setState({text:t.target.value})} />
				</div>
				<div>
					{this.state.sending === false ?
						this.state.name === '' || this.state.email === '' || this.state.text === '' ?
							<div style={{backgroundColor:'#db2828', paddingLeft:20, paddingRight:20, borderRadius:5}} >
								<p style={{color:'white', fontSize:22}} >Envoyer</p>
							</div>
							:
							<div style={{backgroundColor:'#1678c2', paddingLeft:20, paddingRight:20, borderRadius:5}} onClick={() => this.sendMail()}>
								<p style={{color:'white', fontSize:22}} >Envoyer</p>
							</div>
						:
						null
					}
				</div>
			</div>
		)
	}
}