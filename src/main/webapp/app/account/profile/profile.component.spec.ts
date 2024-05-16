import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AccountService } from 'app/core/auth/account.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let mockTranslateService: TranslateService;
  let mockAccountService: jest.Mocked<AccountService>;

  beforeEach(async () => {
    const accountServiceMock = {
      identity: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ProfileComponent, TranslateModule.forRoot()],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { data: {} },
            paramap: of({}),
          },
        },
        AccountService,
      ],
    })
      .overrideTemplate(ProfileComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    mockAccountService = TestBed.inject(AccountService) as jest.Mocked<AccountService>;
    mockTranslateService = TestBed.inject(TranslateService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update imageUrl when file is selected', async () => {
    const mockFile = new File(['TW9ja0Jhc2U2NFN0cmluZw=='], 'mockImage.png', { type: 'image/png' });
    const mockBase64 = 'data:image/png;base64,MockBase64String';

    jest.spyOn(component, 'convertToBase64').mockResolvedValue(mockBase64);

    component.onFileSelected({ target: { files: [mockFile] } });
    await fixture.whenStable(); // Wait for asynchronous operations to complete
    fixture.detectChanges(); // Trigger change detection

    expect(component.convertToBase64).toHaveBeenCalledWith(mockFile);
    expect(component.imageUrl).toEqual(mockBase64);
  });

  it('should convert file to base64', async () => {
    const mockFile = new File(['MockBase64String'], 'mockImage.png', { type: 'image/png' });
    const mockBase64 = 'data:image/png;base64,TW9ja0Jhc2U2NFN0cmluZw==';

    const result = await component.convertToBase64(mockFile);

    expect(result).toEqual(mockBase64);
  });

  it('should unsubscribe from profileDataSubscription on destruction', () => {
    const unsubscribeSpy = jest.spyOn(component.profileDataSubscription!, 'unsubscribe');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
