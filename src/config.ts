export default {
    token       : "",   /// bot token
    prefix      : "-",
    Mongoose    :"", /// Mongoose database connection url
    debugMode   : true,
    joinChannelID : "", /// welcome channel ID
    hypixelApiKey: "", /// hypixel API key
    reminderTime : "21:48", ///  hours in 24 formate :minutes
    dailyReminder : { 
        guild   : "" , ///  guild Id for daily reminder
        channel : "", /// channel id for daily reminder
        message : "a daily message!",
        timezone : ""

         
    }
}
