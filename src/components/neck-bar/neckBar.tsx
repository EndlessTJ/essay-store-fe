import { Tag } from 'antd';
import { EyeOutlined, SendOutlined } from '@ant-design/icons';
import { formatDate } from '@/utils';
import './index.scss';
function NeckBar(props:  {tags: Array<string>, publishDate: Date, view: number, justify?: string, className?: string}) {
  const { tags, publishDate, view, justify, className }  = props;
  let cls = justify === 'space-between' ? "neck-bar justify" : "neck-bar";
  if(className) {
    cls += className;
  };
  return  <div className={cls}>
            <div className="tags">
              {tags.map(item => <Tag key={item} className='tag' color="lime">{item}</Tag>)}
            </div>
            <div className="views">
              <span className='publish-date'><span><SendOutlined className='publish-icon' />&nbsp;&nbsp;</span>{formatDate(publishDate)}</span>
              <span className='view'><EyeOutlined className='icon' />{view}</span>
            </div>
          </div>

}
export default NeckBar;