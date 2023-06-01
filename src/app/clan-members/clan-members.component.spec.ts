import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanMembersComponent } from './clan-members.component';

describe('ClanMembersComponent', () => {
  let component: ClanMembersComponent;
  let fixture: ComponentFixture<ClanMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClanMembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClanMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
