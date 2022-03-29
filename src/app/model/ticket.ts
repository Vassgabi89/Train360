export class Ticket {
  [key: string]: any
  id: number = 0

  departure_location: string = 'Budapest'
  arrival_location: string = 'Paris'

  departure_date: string = '1/1/2022'
  departure_time: string = '12:00 AM'
  travel_time?: string = '12:00'
  arrival_date?: string = '1/1/2022'
  arrival_time?: string = '12:00 PM'

  transfers: number = 0
  class: number = 1
  services?: string = 'seat reservation'

  price: number = 5000
}
