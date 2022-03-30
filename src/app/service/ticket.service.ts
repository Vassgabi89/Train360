import { TrainService } from './train.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket } from '../model/ticket';
import { Train } from '../model/train';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  apiUrl: string = environment.apiUrl
  entityName: string = 'tickets'

  constructor(
    private http: HttpClient,
    private trainService: TrainService,
  ) { }

  get(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/${this.entityName}/${id}`)
  }

  getAll(): Observable<Ticket[]> {
    const tickets = this.http.get<Ticket[]>(`${this.apiUrl}/${this.entityName}`)
    const trains = this.trainService.getAll()
    const ticketsWithTrains = forkJoin([tickets, trains]).pipe(
      map(([ticketlist, trainlist]) => {
        ticketlist.map((ticket) => {
          const train = trainlist.find((train) => train.id === ticket.trainID) || new Train()
          ticket.train = train
        })
        return ticketlist
      }
      )
    )
    return ticketsWithTrains
  }
  /*
    override getAll(): Observable<Order[]> {
      const allCustomer$ = this.customerService.getAll();
      const allProduct$ = this.productService.getAll();

      const allFullOrder$ = forkJoin([allOrder$, allProduct$, allCustomer$]).pipe(
        map(([orderList, productList, customerList]) => {
          orderList.map((order) => {
            const product =
              productList.find((product) => product.id === order.productID * 1) ||
              new Product();
            const customer =
              customerList.find(
                (customer) => customer.id === order.customerID * 1
              ) || new Customer();
            order.product = new Product(product);
            order.customer = new Customer(customer);
            //order.customerID = order.customerID * 1;
            //order.productID = order.productID * 1;
            //console.log(order);
          });
          return orderList;
        })
      );

      return allFullOrder$;
    }*/


  create(ticket: Ticket): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${this.entityName}`, ticket)
  }

  update(ticket: Ticket): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${this.entityName}/${ticket.id}`, ticket)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${this.entityName}/${id}`)
  }

}
