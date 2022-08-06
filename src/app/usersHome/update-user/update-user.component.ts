import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';
import { OpportunityService } from 'src/app/shared/service/opportunity.service'
import { Opportunity } from 'src/app/shared/model/opportunity.model';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id: string;
  request: RequestUpdate;
  opportunities: Opportunity[];
  displayedColumns: string[] = ['nome', 'limite', 'interesse', 'termo', 'status' ];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private opportunityService: OpportunityService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      this.request = {
        name: res.name,
        email: res.email,
        isActive: res.isActive,
        phone: res.phone,
        revenue: res.revenue,
        agreedTerms: res.agreedTerms,
      }
    });

    this.opportunityService.getAll(this.id).subscribe(res => {
      this.opportunities = res
    })
  }

  update() {

    try {
      this.userService.updateUser(this.id, this.request).subscribe(res => {
        console.log(res);
      })
      this.opportunityService.update(this.id, this.opportunities).subscribe(res => {
        console.log(res);
      })
      alert('Atualizado com sucesso!')
    } catch (error) {
      alert('Erro ao atualizar')
    }
  }

  delete() {
    this.userService.deleteUser(this.id,).subscribe(res => {
      alert('Deletado com sucesso!');
    })
  }
}
