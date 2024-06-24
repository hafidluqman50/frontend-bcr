import { useNavigate, NavigateFunction } from "react-router-dom";

const checkIfLogin = (url: string, func: CallableFunction): void => {
  if(localStorage.getItem('auth_token') !== null) {
    func(url)
  }
}

let globalNavigate: NavigateFunction

const GlobalHistory = (): null => {
  globalNavigate = useNavigate();

  return null;
};

const formatRupiah = (currency: number): string => {
  return new Intl.NumberFormat('id-ID', { minimumFractionDigits:0 }).format(currency)
}

const formatDate = (date: string|Date): string => {
  const newDate: Date = new Date(date);
  const formatter: Intl.DateTimeFormat  = new Intl.DateTimeFormat('id-ID', { 
    year:'numeric',
    month:'short',
    day:'numeric',
    timeZone:'Asia/Makassar',
    hour:'numeric',
    minute: 'numeric',
    hour12:false
  });
  const formattedDate: string = formatter.format(newDate).replace(' pukul ', ', ');
  
  return formattedDate
}

const dateTime = (date: string|Date): string => {
  const newDate = new Date(date)
  
  return newDate.toJSON().split('.')[0].split('T').join(' ')
}

const getRandomItemArray = (arr: string[] | number[]): string|number => {
  
  const randomIndex = Math.floor(Math.random() * arr.length);
  
  // get random item
  const item = arr[randomIndex];

  return item;
  
}

export {
  checkIfLogin,
  globalNavigate,
  GlobalHistory,
  formatRupiah,
  formatDate,
  dateTime,
  getRandomItemArray
}