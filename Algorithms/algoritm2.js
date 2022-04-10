function isValid(s) {
    let lngth= s.length();
    let finalAnswer = false;

    if (lngth == 0 || lngth%2!=0){ 
        return false;
    }

    for (let i=0; i<lngth; i++){
        if (s[0]==s[lngth-1-i]){
            s = s.slice(1,-1);
            lngth= s.length();
            if (lngth==0){
                finalAnswer = true;
            }
            else {
                continue;
            }
        }
        if ( s[i]=='(' && s[[i+1]]==')' || s[i]=='{' && s[[i+1]]=='}' || s[i]=='[' && s[[i+1]]==']') {
            s = s.slice(1,-1);
            lngth= s.length();
            if (lngth==0){
                finalAnswer = true;
            }
            else {
                continue;
            }
        }
    }
    return finalAnswer;
    
}