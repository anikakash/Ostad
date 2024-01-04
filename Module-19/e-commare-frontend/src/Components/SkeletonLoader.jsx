import { Container, Row, Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'bootstrap/dist/css/bootstrap.min.css';

function SkeletonLoader() {

  return (
    <Container>
                <div className="featured-heading">
            <h1 className='text-center'>Featured Products</h1>
            <h2 className='text-center'>We Provide Best Products</h2>
            <br/>
            <br/>
          </div>
      <Row>

        <div class="row">
        <div class="col-md-3">
          <div class="product-skeleton bg-light rounded"></div>
        </div>
        <div class="col-md-3">
          <div class="product-skeleton bg-light rounded"></div>
        </div>
        <div class="col-md-3">
          <div class="product-skeleton bg-light rounded"></div>
        </div>
        <div class="col-md-3">
          <div class="product-skeleton bg-light rounded"></div>
        </div>
      </div>

        <div class="row">
        <div class="col-md-3">
          <div class="product-skeleton bg-light rounded"></div>
        </div>
        <div class="col-md-3">
          <div class="product-skeleton bg-light rounded"></div>
        </div>
        <div class="col-md-3">
          <div class="product-skeleton bg-light rounded"></div>
        </div>
        <div class="col-md-3">
          <div class="product-skeleton bg-light rounded"></div>
        </div>
      </div>

        <div class="row">
        <div class="col-md-3">
          <div class="product-skeleton bg-light rounded"></div>
        </div>
        <div class="col-md-3">
          <div class="product-skeleton bg-light rounded"></div>
        </div>
        <div class="col-md-3">
          <div class="product-skeleton bg-light rounded"></div>
        </div>
        <div class="col-md-3">
          <div class="product-skeleton bg-light rounded"></div>
        </div>
      </div>


      </Row>
    </Container>
  );
}

export default SkeletonLoader;
