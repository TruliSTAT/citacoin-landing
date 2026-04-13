export async function onRequestPost(context) {
  const h={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type'};
  try {
    const {email,source}=await context.request.json();
    await fetch('https://api.resend.com/emails',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer re_DfxCWGDy_H7v4EvaGY6Pzc4VJZE4pDWxe'},
      body:JSON.stringify({from:'Cita Empire <leads@knowlegalleads.com>',to:['trulizues@gmail.com'],subject:`🪙 New ${source||'cita'} signup: ${email}`,html:`<p>New signup: <strong>${email}</strong></p><p>Source: ${source||'unknown'}</p>`})});
    return new Response(JSON.stringify({ok:true}),{status:200,headers:{...h,'Content-Type':'application/json'}});
  } catch(err) { return new Response(JSON.stringify({error:err.message}),{status:500,headers:{...h,'Content-Type':'application/json'}}); }
}
export async function onRequestOptions(){return new Response(null,{headers:{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type'}});}
