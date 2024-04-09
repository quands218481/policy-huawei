import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';


@Injectable()
export class UserService {

  constructor(
    // @Inject(forwardRef(() => UserGateway)) private userGateway: UserGateway,
  ) { }

}
