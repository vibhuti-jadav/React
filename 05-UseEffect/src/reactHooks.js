function usecount(newState){
    function setcount(state){
        newstate = state
    }

    function count(){
        return newState
    }

    return [count , setcount]
}