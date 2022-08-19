


interface dataType {
  avatar: string,
  name: string,
  birthday: string,
  phonenumber: string,
  email: string,
  address: string,
}



interface patientListType {
  patientList: dataType[]
}



let initialfilterState: patientListType = {
  patientList: [
    {
      avatar: './assets/img/avatar.png',
      name: 'dante',
      birthday:'2002-10-22',
      phonenumber: '230343',
      email:'ydante1022@gmail.com',
      address: 'fjieji'
    },
    {
      avatar: './assets/img/avatar.png',
      name: 'dante',
      birthday:'2002-10-22',
      phonenumber: '230343',
      email:'ydante1022@gmail.com',
      address: 'fjieji'
    }
  ]
}


const reducer = (state = initialfilterState ,action:any) => {
  switch(action.type){
   
    case 'PATIENT_REGISTER':
      const list: any = initialfilterState.patientList;
      list.push(action.payload);
      return{
        ...state, patientList: list
      }
    default:
      return state;
  }
}
export default reducer;