import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import { PackagesForm } from 'components/Pricing';
import { PackageNameEnum } from 'api';
import { useInvoice } from 'hooks';
import { ButtonIcon } from 'ui';
import { ChevronRight } from 'icons';
import downArrow from 'assets/new-ui/pricing/downarrow.png';
import WashmixAdvantageModal from 'modals/WashmixAdvantageModal';

export const Packages = () => {
  const { invoice, getInvoice } = useInvoice();
  const [isAdvantageModalOpen, setIsAdvantageModalOpen] = useState(false);
  const [activePackageName, setPackageId] = useState((invoice?.subscription || 'payc') as PackageNameEnum | null);
  const history = useHistory();

  const goToNextPage = useCallback(async () => {
    try {
      if (activePackageName === 'payc') {
        await getInvoice(`${activePackageName}`);
      }
      history.push('/order/delivery');
    } catch (e) {
      console.log(e);
    }
  }, [history, activePackageName, getInvoice]);

  const handlePackageChange = useCallback(
    async (packageId) => {
      setPackageId(packageId);
      try {
        await getInvoice(`${packageId}`);
      } catch (e) {
        console.log(e);
      }
    },
    [setPackageId, getInvoice],
  );

  return (
    <div>
      <WashmixAdvantageModal visible={isAdvantageModalOpen} onHide={() => setIsAdvantageModalOpen(false)} />
      <div className="packages-section">
        <div className="container">
          <div className="vague-remover">
            <div>
              <b>Select</b> either <b>PAYC</b> [Pay As You Clean] <br />
              <b style={{ color: '#2ec35f', lineHeight: '25px' }}>OR</b> <br />
              <b>WashMix Advantage Pre-Paid</b> options & get <b>Discounts & Perks</b> <br />
            </div>{' '}
            <span style={{ fontSize: 'small' }}>
              <i>
                <span style={{ color: '#2ec35f', fontWeight: 'bold' }}>Reminder</span>: Your Pre-paid credit{' '}
                <span style={{ color: '#2ec35f', fontWeight: 'bold' }}>never</span>&nbsp;expires
              </i>
            </span>
            <p className="more-info-sect">
              For more info, see{' '}
              <span className="advantage-modal-text" onClick={() => setIsAdvantageModalOpen(true)}>
                Washmix Advantage
              </span>
            </p>
            <img src={downArrow} width="30px" alt="down-arrow" />
          </div>
          <PackagesForm activeId={activePackageName} onChange={handlePackageChange} />
        </div>
        <div className="top_bodr">
          <ButtonIcon
            variant="primary"
            label="Next"
            Icon={ChevronRight}
            onClick={goToNextPage}
            disabled={activePackageName == null}
          />
        </div>
      </div>
    </div>
  );
};

export default Packages;
