function CalculateBill(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarnLevel = 20;
    var theCritLevel = 30;
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost){
        theCallCost = callCost;
    }
    function getCallCost(){
        return theCallCost    
    }

    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }
    function getSmsCost(){
        return theSmsCost    
    }

    function getTotal(){
        return theCallCost + theSmsCost
    }

    function getWarnLevel(){
        return theWarnLevel;
    }
    
    function getCritLevel(){
        return theCritLevel;
    }

    function makeCall(){
        return callCostTotal += theCallCost;
    }

    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }

    function getTotalCallCost(){
        return callCostTotal;
    }

    function getTotalSmsCost(){
        return smsCostTotal;
    }

    function sendSms(){
        smsCostTotal += theSmsCost;
    }

    function alertColor(){
       
        if (getTotalCost() >= getCritLevel()) {
            return "critical";
            }  
        if (getTotalCost() >= getWarnLevel()) {
            return "warning";
            }        
    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        getTotal,
        getWarnLevel,
        getCritLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        alertColor,
    }
}

