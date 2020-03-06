import axios from 'axios'

const getCars = async () => {
  const res = await axios.get('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes')
  return res.data
}

export default getCars
