

const Calendar = () => {
    const today = new Date()
    const whatday = today.getDay()
    const month = today.getMonth()
    const year = today.getFullYear()
    const monthNames = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    let divCollecttionOfDay = []
    for (let i = 0 ; i < 7 ;i ++){
        let day = <div className="greyNotTodaysDay">{dayNames[i]}</div>
        if (i === whatday){
            day = <div className="blackTodaysDay">{dayNames[i]}</div>
        }
        divCollecttionOfDay = [...divCollecttionOfDay, day]
    }


    // 設定閏月的規則
    const isLeapYear = (year) => {
        return (year % 4 ===0 && year % 100 !== 0 && year % 400 !==0) || (year % 100 === 0 && year % 400 ===0)
    }

    //抓閏月

    const getFebDays = (year) => {
        return isLeapYear(year) ? 29 :28
    }

    // 抓 calendar css   
    
    // 產生年月
    const daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    // const generateCalendar = (month, year) => {
    //     let daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    // }

    // 抓現在的日期
    const firstDay = new Date(year, month, 1)
    // firstDay.getDay() 這個月第一天是禮拜幾
    let divCollecttionOfThisMonth = []
    for (let i=0; i <= daysOfMonth[month] + firstDay.getDay(); i++){
        let newday = <div></div>
        if (i>= firstDay.getDay()) { // 顯示這個月所有日期
            newday = 
                <div className="calendarDay">
                    {i - firstDay.getDay()+1}
                </div>
            if (i === firstDay.getDay()){ // 每月的第一天，暫時先標成淺藍色
                newday = 
                    <div className="calendarDay">
                        {i - firstDay.getDay()+1}
                    </div>
            }
            if (i - firstDay.getDay() + 1 === today.getDate() && year === today.getFullYear()){ // 當日，標成藍色
                newday = 
                    <div className="calendarDay">
                        {i}<div className="currDate"></div>
                    </div>
            }
        }
        divCollecttionOfThisMonth = [...divCollecttionOfThisMonth, newday]
    }
    
    console.log(today.getDate())
    console.log(today.getFullYear())
    console.log(year)


  return (
    <div className="calendar">
        <div className="calendarMonthNyear">
            <div className="wordCalendar">Calendar</div>
            <div className="monthNyearPicker">
                <div className="monthNyear">January 2023</div>
                <img className="downArrowInCalendarInBackendDashboard" src={require("../../../static/DownArrow.png")} />
            </div>
        </div>
        <div className="calendarBody">
            {/* 星期 */}
            <div className="calendarWeekDay">
                {divCollecttionOfDay}
            </div>
            {/* 日期 */}
            <div className="calendarDays">
                {divCollecttionOfThisMonth}
            </div>

        </div>
      
    </div>
  )
}

export default Calendar
