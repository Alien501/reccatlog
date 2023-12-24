import axios from "axios";

const fetchUrl = 'http://localhost:3000/'


const getdata = async (searchQ) => {
    console.log(searchQ);
    const res = await axios.get(`http://localhost:3000/getdata?title=${searchQ}`,
        {
            headers: {
                'Accept': '*'
            }
        }
    )
    const data = await res.data
    return data
}

const getFilter = async (searchByFilter) => {
    let {dept, sem, type, year} = searchByFilter
    dept = (dept == undefined || dept == 'dept')? 'na': dept
    sem = (sem == undefined || sem == 'sem')? 'na': sem
    type = (type == undefined || type == 'type')? 'na': type
    year = (year == undefined || year == 'year')? 'na': year

    if (dept == 'na' && sem == 'na' && type == 'na' && year == 'na') return {
        stat: false,
        data : ''
    };

    const searchQuery = `${dept == 'na'? '': 'dept='+dept.toUpperCase()+'&'}${sem == 'na'? '': 'sem='+sem.toUpperCase()+'&'}${year == 'na'? '': 'year='+year.toUpperCase()+'&'}${type == 'na'? '': 'type='+type.toUpperCase()}`
    const res = await axios.get(`http://localhost:3000/getdata?${searchQuery}`,
    {
        headers: {
            'Accept': '*'
        }
    }
    )
    const data = await res.data
    return {
        stat: true,
        data: data
    }
}

const submitLink = async (submitData) => {
    var options = {
        method: 'POST',
        url: 'http://localhost:3000/add',
        params: {
          title: submitData.title,
          rollno: submitData.rollNo,
          type: submitData.type,
          year: submitData.year,
          sem: submitData.sem,
          link: submitData.link,
          dept: submitData.dept.toUpperCase()
        },
        headers: {Accept: '*/*'}
      };
      
      let data
      axios.request(options).then(async function (response) {
        data = await response.data
        console.log(data);
    }).catch(function (error) {
        console.error(error);
    });
    return data

}

export { getdata, getFilter, submitLink }