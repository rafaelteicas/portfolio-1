'use client';

import {ParamsProps} from '@/domain/common/params-props';
import {FooterContainer} from './styles/footer.styles';
import {getLanguageServer} from '@/infra/translate/translate-server';

export default function Footer({params}: ParamsProps) {
  const {translate} = getLanguageServer(params.lang);
  return (
    <FooterContainer>
      <div dangerouslySetInnerHTML={{__html: translate.footer}} />
    </FooterContainer>
  );
}
