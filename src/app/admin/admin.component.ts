import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { CommonService } from '../services/common/common.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [AuthService, CommonService],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'title',
    'description',
    'location',
    'date',
    'price',
    'availableSeatNo',
  ];
  dataSource = new MatTableDataSource(this.commonService.ELEMENT_DATA);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private authService: AuthService,
    private router: Router,
    private modalService: NgbModal,
    private commonService: CommonService
  ) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(target: any) {
    this.dataSource.filter = target.value.trim().toLocaleLowerCase();
  }

  openModal() {
    const modelRef = this.modalService.open(BookingFormComponent);
    modelRef.result.then((res) => {
      this.updateData(res);
      console.log(res);
    });
  }

  updateData(data: any) {
    this.dataSource.data = [...this.dataSource.data, data];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
