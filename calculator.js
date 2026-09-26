/* tool-ciwa-ar · ELUCENIA · https://github.com/Elucenia/tool-ciwa-ar
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"ciwa-ar","title":"CIWA-Ar","fields":[["nausea","Náuseas e vômitos","sel",{"opts":{"0":"0 – Sem náusea e sem vômito","1":"1 – Náusea leve, sem vômito","2":"2","3":"3","4":"4 – Náusea intermitente com ânsia de vômito","5":"5","6":"6","7":"7 – Náusea constante, ânsia frequente e vômitos"}}],["tremor","Tremor (braços estendidos e dedos afastados)","sel",{"opts":{"0":"0 – Sem tremor","1":"1 – Não visível, mas sentido ponta a ponta dos dedos","2":"2","3":"3","4":"4 – Moderado, com os braços estendidos","5":"5","6":"6","7":"7 – Grave, mesmo com os braços não estendidos"}}],["sudorese","Sudorese paroxística","sel",{"opts":{"0":"0 – Sem suor visível","1":"1 – Suor quase imperceptível, palmas úmidas","2":"2","3":"3","4":"4 – Gotas de suor evidentes na testa","5":"5","6":"6","7":"7 – Sudorese profusa"}}],["ansiedade","Ansiedade","sel",{"opts":{"0":"0 – Sem ansiedade, à vontade","1":"1 – Levemente ansioso","2":"2","3":"3","4":"4 – Moderadamente ansioso ou reservado (ansiedade inferida)","5":"5","6":"6","7":"7 – Equivalente a estado de pânico agudo"}}],["agitacao","Agitação","sel",{"opts":{"0":"0 – Atividade normal","1":"1 – Um pouco mais de atividade que o normal","2":"2","3":"3","4":"4 – Moderadamente inquieto","5":"5","6":"6","7":"7 – Anda de um lado para o outro ou se debate constantemente"}}],["tatil","Distúrbios táteis (coceira, formigamento, queimação, sensação de insetos na pele)","sel",{"opts":{"0":"0 – Ausente","1":"1 – Muito leve","2":"2 – Leve","3":"3 – Moderado","4":"4 – Alucinações moderadamente graves","5":"5 – Alucinações graves","6":"6 – Alucinações extremamente graves","7":"7 – Alucinações contínuas"}}],["auditivo","Distúrbios auditivos (sons mais altos ou ásperos, ouvir coisas que não existem)","sel",{"opts":{"0":"0 – Ausente","1":"1 – Muito leve","2":"2 – Leve","3":"3 – Moderado","4":"4 – Alucinações moderadamente graves","5":"5 – Alucinações graves","6":"6 – Alucinações extremamente graves","7":"7 – Alucinações contínuas"}}],["visual","Distúrbios visuais (luz mais forte, cores diferentes, ver coisas que não existem)","sel",{"opts":{"0":"0 – Ausente","1":"1 – Muito leve","2":"2 – Leve","3":"3 – Moderado","4":"4 – Alucinações moderadamente graves","5":"5 – Alucinações graves","6":"6 – Alucinações extremamente graves","7":"7 – Alucinações contínuas"}}],["cefaleia","Cefaleia ou sensação de cabeça cheia","sel",{"opts":{"0":"0 – Ausente","1":"1 – Muito leve","2":"2 – Leve","3":"3 – Moderada","4":"4 – Moderadamente grave","5":"5 – Grave","6":"6 – Muito grave","7":"7 – Extremamente grave"}}],["orientacao","Orientação e sensório","sel",{"opts":{"0":"0 – Orientado e faz adições seriadas","1":"1 – Não faz adições seriadas ou incerto quanto à data","2":"2 – Desorientado quanto à data por até 2 dias","3":"3 – Desorientado quanto à data por mais de 2 dias","4":"4 – Desorientado quanto ao lugar e/ou à pessoa"}}]],"config":{"unit":"de 67","label":"CIWA-Ar","fields":[["nausea","sel",0],["tremor","sel",0],["sudorese","sel",0],["ansiedade","sel",0],["agitacao","sel",0],["tatil","sel",0],["auditivo","sel",0],["visual","sel",0],["cefaleia","sel",0],["orientacao","sel",0]],"bands":[[0,"low","Abstinência leve (&lt; 10)","Em geral não requer medicação adicional; mantenha a reavaliação periódica."],[10,"mid","Abstinência moderada (10 a 19)","Benzodiazepínico guiado por sintomas e reavaliação frequente da escala."],[20,"high","Abstinência grave (≥ 20)","Tratamento em ambiente hospitalar, com benzodiazepínico e vigilância para convulsões e delirium tremens."]]},"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);


function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
