let GetJSONFile = async(file) => {
    return await fetch(file).then(data => data.json())
  }
  GetJSONFile("class.json")
  