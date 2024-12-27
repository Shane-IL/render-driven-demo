const IntroSection = () => (
    <div className="space-y-8">
      <div className="bg-surface0 p-6 rounded-lg border border-surface1">
        <h3 className="text-xl font-semibold text-text mb-4">
          Why This Guide?
        </h3>
        <div className="space-y-4 text-subtext0">
          <p>
            I've been a frontend developer for over 11 years, starting my journey around 2013 
            when modern frameworks were just beginning to take shape. React immediately stood 
            out to me because of its unopinionated nature and simplicity, offering the freedom 
            to explore different architectural approaches.
          </p>
          <p>
            However, I noticed that over time, React's ecosystem started to drift away from 
            this simplicity. The introduction of more complex patterns and hooks, while powerful, 
            sometimes obscured what made React special in the first place.
          </p>
        </div>
      </div>
  
      <div className="bg-surface0 p-6 rounded-lg border border-surface1">
        <h3 className="text-xl font-semibold text-text mb-4">
          A Transformative Experience
        </h3>
        <div className="space-y-4 text-subtext0">
          <p>
            About three years ago, I joined a greenfield startup where I encountered a strict 
            enforcement of Render-Driven React (RDR). The CTO had a clear vision: hooks were 
            forbidden without explicit justification. Initially, this felt restrictive, and 
            I struggled to adapt.
          </p>
          <p>
            But as I immersed myself in this pattern, something clicked. I began to understand 
            not just how React works, but how it should work. The developer experience became 
            more enjoyable, the codebase more maintainable, and the architecture more 
            predictable.
          </p>
        </div>
      </div>
  
      <div className="bg-surface0 p-6 rounded-lg border border-surface1">
        <h3 className="text-xl font-semibold text-text mb-4">
          Sharing the Knowledge
        </h3>
        <div className="space-y-4 text-subtext0">
          <p>
            While I recognize that RDR might not be suitable for every project, I believe 
            its principles offer valuable insights into React's core nature. Even if you 
            don't adopt RDR completely, understanding these concepts can vastly improve 
            your React development experience.
          </p>
          <p>
            This guide is my attempt to share what I've learned, hoping to help others 
            discover the clarity and simplicity that RDR can bring to React development.
          </p>
        </div>
      </div>
      <div className="bg-surface0 p-6 rounded-lg border border-surface1">
        <h3 className="text-xl font-semibold text-text mb-4">
         Want to look under the hood?
        </h3>
        <div className="space-y-4 text-subtext0">
          <p>
           Have a look through the code for this page here, it's all RDR based:
          </p>
          <a href='https://github.com/Shane-IL/render-driven-demo' target="_blank" className='text-mauve'>https://github.com/Shane-IL/render-driven-demo</a>
        </div>
      </div>
    </div>
  );
  
  export default IntroSection;

  //https://shane-il.github.io/render-driven-demo/