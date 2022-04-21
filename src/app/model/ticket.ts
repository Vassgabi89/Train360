import { Train } from 'src/app/model/train';
export class Ticket {
  [key: string]: any
  id: number = 0
  trainID: number = 0
  train?: Train = new Train()

  departure_location: string = ''
  arrival_location: string = ''

  departure_date: string = '1/1/2022'
  departure_time: string = '12:00 AM'
  travel_time?: string = '00:00'
  arrival_date?: string = '1/1/2022'
  arrival_time?: string = '12:00 PM'

  transfers: number = 0
  class: number = 1
  services?: string = 'seat reservation'

  price: number = 5000

  passengers?: number = 1
  reducedFare?: number = 0
  fullPrice?: number = 5000
  bought?: boolean = false
}
