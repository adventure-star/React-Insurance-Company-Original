const { REACT_APP_MODE } = process.env
const producttionMode = REACT_APP_MODE === "development" ? false : true
export const baseUrl = producttionMode? "https://poolpo.in/new/api": "https://localhost:44352/api"
export const customerUrl = producttionMode? "https://poolpo.in/new/Customers/api": "https://localhost:44352/Customers/api"
export const notificationUrl = producttionMode? "https://poolpo.in/new/NotificationHub": "https://localhost:44352/NotificationHub"
export const amplitudeKey = producttionMode? "784230e9fdbb75cd04551c62f109178a": "83cafa3acbaa2b535c9e4f4cdef0fc27"
