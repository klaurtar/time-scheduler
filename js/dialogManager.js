const DialogManager = (function () {
    const $dialogContainerElement = document.createElement('div');
    $dialogContainerElement.className = 'topLevelDialogContainer';
    document.body.appendChild($dialogContainerElement);
  
   
    return {
        createDialog: () => {
            const dialog = new Dialog();
            const $dialogElement = dialog.getDialogElement();
            $dialogContainerElement.appendChild($dialogElement);
            return dialog;
        }
    }
  })();