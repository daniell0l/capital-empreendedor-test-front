import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestUpdate } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';
import { OpportunityService } from 'src/app/shared/service/opportunity.service'
import { Opportunity } from 'src/app/shared/model/opportunity.model';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  id: string;
  request!: RequestUpdate;
  opportunities: Opportunity[];
  displayedColumns: string[] = ['nome', 'limite', 'interesse', 'termo', 'status'];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private rota: Router,
    private opportunityService: OpportunityService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      this.request = res
    });

    this.opportunityService.getAll(this.id).subscribe(res => {
      this.opportunities = res
    })
  }

  update() {
    try {

      console.log(this.opportunities);

      this.userService.updateUser(this.id, this.request).subscribe(res => {
        this.opportunityService.update(this.id, this.opportunities).subscribe(res => {
          this.rota.navigate(['/']);
        })
      })
      alert('Atualizado com sucesso!')
    } catch (error) {
      alert('Erro ao atualizar')
    }
  }
}
