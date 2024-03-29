
var userText = document.getElementById('userText'),
    userRegExp = document.getElementById('userRegExp'),
    userModifier = document.getElementsByName('userModifier'),
    matchingBtn = document.getElementById('matchingBtn'),
    matchingResult = document.getElementById('matchingResult'),
    userReplaceText = document.getElementById('userReplaceText'),
    replaceBtn = document.getElementById('replaceBtn'),
    replaceResult = document.getElementById('replaceResult'),
    regList = document.getElementById('regList').getElementsByTagName('a');
var pattern,
    modifier;

for (var i = 0; i < userModifier.length; i++) {
    userModifier[i].onclick = function () {
        modifier = '';
        for (var j = 0; j < userModifier.length; j++) {
            if (userModifier[j].checked) {
                modifier += userModifier[j].value;
            }
        }
    }
}

matchingBtn.onclick = function () {
    if (!userText.value) {
        alert('请输入待匹配的文本');
        userText.focus();
        return;
    }
    if (!userRegExp.value) {
        alert('请输入正则表达式');
        userRegExp.focus();
        return;
    }
    pattern = new RegExp("("+userRegExp.value+")", modifier);
    matchingResult.innerHTML = pattern.exec(userText.value) ? userText.value.replace(pattern,
            '<span style=background-color:yellow>$1</span>') : "(没有匹配)";
};

replaceBtn.onclick = function () {
    if (!userText.value) {
        alert('请输入待匹配的文本');
        userText.focus();
        return;
    }
    if (!userRegExp.value) {
        alert('请输入正则表达式');
        userRegExp.focus();
        return;
    }
    if (!userReplaceText.value) {
        alert('请输入待匹配的文本');
        userReplaceText.focus();
        return;
    }
    pattern = new RegExp("("+userRegExp.value+")", modifier);
    replaceResult.innerHTML = pattern.exec(userText.value) ? userText.value.replace(pattern,
        '<span style=color:red> '+userReplaceText.value+' </span>') : "(没有匹配)";
};

for (var i=0;i<regList.length;i++){
    regList[i].onclick=function () {
        userRegExp.value = this.title;
    }
}
