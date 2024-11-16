const targetOrigin='*';

const getIframe = () => {
  const iframe = document.getElementById('gameIframe');
  return (iframe as any).contentWindow;
}

const prepareMessage = (payload) => {
  const objectMessage = {
    ...payload,
    sender: 'ui'
  }
  return JSON.stringify(objectMessage);
}

const sendMessage = (payload) => {
  const iframeWindow = getIframe();
  const message = prepareMessage(payload);
  iframeWindow.postMessage(message, targetOrigin);
  console.log('[UI] post message: ', message);
}

export const sendBetMessage = ()=> {
  const message = { type: 'bet' };
  sendMessage(message);
}

export const sendRowMessage = (row: number)=> {
  const message = { type: 'setRow', data: row };
  sendMessage(message);
}

export const sendRiskMessage = (risk: string)=> {
  const message = { type: 'setRisk', data: risk.toLowerCase() };
  sendMessage(message);
}

export const subscribeMessages = ()=> {
  window.addEventListener('message', (event) => {
    const message = event.data;

    if (message.sender === 'game') {
      console.log('[UI] received message:', message);
    }
  });
}
