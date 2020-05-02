function filterRelations() {
    
    const currCityRelations = this.state.sourceData.filter(x=>x.user.currentLocation.City.id==this.props.loginuser.currentLocation.City.id);
    const homeStateRelations = this.state.sourceData.filter(x=>x.user.homeLocation.State.id==this.props.loginuser.homeLocation.State.id);
    const currStateRelations = this.state.sourceData.filter(x=>x.user.currentLocation.State.id==this.props.loginuser.currentLocation.State.id);
    const homeCountryRelations = this.state.sourceData.filter(x=>x.user.homeLocation.Country.id==this.props.loginuser.homeLocation.Country.id);
    const currCountryRelations = this.state.sourceData.filter(x=>x.user.currentLocation.Country.id==this.props.loginuser.currentLocation.Country.id);
    this.setState({filterModel:false});
    let concatFiltered = []
    if (this.state.isHomeCity) {
        const homeCityRelations = this.state.sourceData.filter(x=>x.user.homeLocation.City.id==this.props.loginuser.homeLocation.City.id);
        concatFiltered = [...concatFiltered, ...homeCityRelations]
    } 
    if (this.state.isCurCity) {
        concatFiltered = [...concatFiltered, ...currCityRelations]
    }
    if (this.state.isHomeState) {
        concatFiltered = [...concatFiltered, ...homeStateRelations]
    }
    if (this.state.isCurState) {
        concatFiltered = [...concatFiltered, ...currStateRelations]
    }
    if (this.state.isHomeCountry) {
        concatFiltered = [...concatFiltered, ...homeCountryRelations]
    }
    if (this.state.isCurCountry) {
        concatFiltered = [...concatFiltered, ...currCountryRelations]
    }
    if (concatFiltered.length) {
        this.removeDuplicates(concatFiltered)
    }
    if (!this.state.isHomeCity && !this.state.isHomeState && !this.state.isHomeCountry && !this.state.isCurCity && !this.state.isCurState && !this.state.isCurCountry) {
        this.setState({sourceData:this.state.sourceData,sourceData_Fam:this.state.sourceData_Fam.filter(x=> x.rid!==1),sourceData_Frnz:this.state.sourceData_Frnz.filter(x=> x.rid==1)})
        concatFiltered = this.state.sourceData
    }
    // else {
    //     this.setState({sourceData:concatFiltered,sourceData_Fam:concatFiltered,sourceData_Frnz:concatFiltered})
    // }
}


function removeDuplicates(concatFiltered) {
    let refinedArray = []
    let uniqueIds = []
    concatFiltered.forEach((obj) => {
        if (!(uniqueIds.includes(obj.user._id))) {
            uniqueIds.push(obj.user._id)
            refinedArray.push(obj); 
        }
            
            
    });
    return refinedArray
}