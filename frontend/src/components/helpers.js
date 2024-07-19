export function buildStructure(rootNode) {
  function buildChilds(parent) {
    parent.childs = parent.childs.map((child) => {
      child.match = true;
      child.parent = parent;
      if (child.dir) {
        child.childs = buildChilds(child);
      }
      return child;
    });
    return parent.childs;
  }

  rootNode.childs = rootNode.childs.map((node) => {
    node.parent = rootNode;
    node.match = true;
    if (node.dir) {
      node.childs = buildChilds(node);
    }
    return node;
  });
  rootNode.match = true;

  return rootNode;
}
