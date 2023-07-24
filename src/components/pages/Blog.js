import React from 'react';
import Footer from '../Footer';
import '../../css/Blog.css'

export default function Blog() {
  return (
    <div>
      <h1>My Blog</h1>
      
      <div className="post">
        <h2>Post Title 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus metus nisl, a cursus metus tincidunt non. Proin non nisl sed odio sollicitudin lacinia. Cras non nulla eget nulla tincidunt sagittis. Curabitur vitae neque eget dolor tincidunt semper non nec arcu.</p>
      </div>
      
      <div className="post">
        <h2>Post Title 2</h2>
        <p>Pellentesque ac ligula non dolor volutpat rhoncus. Vestibulum dapibus lectus eu luctus laoreet. Maecenas consectetur mi id elementum finibus. Mauris aliquet nulla quis risus posuere, non lacinia orci vehicula.</p>
      </div>

      <div className="post">
        <h2>Post Title 3</h2>
        <p>Nullam viverra metus ac auctor cursus. Ut non quam sollicitudin, rutrum est ac, porta augue. Praesent posuere mollis nunc, at congue nisl pretium ac. Proin pellentesque lacinia velit, eget scelerisque magna cursus in.</p>
      </div>

      <Footer />
    </div>
  );
}


