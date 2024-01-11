import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSidebarComponent } from './tag-sidebar.component';

describe('TagSidebarComponent', () => {
  let component: TagSidebarComponent;
  let fixture: ComponentFixture<TagSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
